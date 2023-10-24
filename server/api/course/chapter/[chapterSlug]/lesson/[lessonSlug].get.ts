import { PrismaClient } from '@prisma/client';
import protectRoute from "~/server/utils/protectRoute";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    // @ts-ignore
    const { chapterSlug, lessonSlug } = event.context.params;

    if (chapterSlug !== '1-chapter-1') {
        protectRoute(event);
    }

    const lesson = await prisma.lesson.findFirst({
        where: {
            slug: lessonSlug,
            Chapter: {
                slug: chapterSlug,
            }
        },
    });

    if (!lesson) {
        throw createError({
            statusCode: 404,
            message: 'Lesson not found',
        });
    }

    return {
        ... lesson,
        path: `/course/chapter/${chapterSlug}/lesson/${lessonSlug}`
    };
});
