import { StorageSerializers } from "@vueuse/core";

export default async <T>(url: string) => {
    // Use sessionStorage to cache the data
    const cached = useSessionStorage<T>(url, null, {
        // By passing a null as default it can't automatically
        // determine the type. So we need to pass the type manually.
        serializer: StorageSerializers.object,
    });

    if (!cached.value) {
        // Pass browser cookies to the server so it's authenticated
        const { data, error } = await useFetch<T>(url, {
            headers: useRequestHeaders(['cookie']),
        });

        if (error.value) {
            throw createError({
                ...error.value,
                statusMessage: `Could not fetch data from ${url}`
            });
        }

        cached.value = data.value as T;
    } else {
        console.log(`Getting value frm cache for ${url}`);
    }

    return cached;
};
