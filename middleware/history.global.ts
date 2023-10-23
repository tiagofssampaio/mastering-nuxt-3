export default defineNuxtRouteMiddleware((to, from) => {
    const navigationHistory = useLocalStorage('history', []);
    // @ts-ignore
    navigationHistory.value.push(to.path);
});
