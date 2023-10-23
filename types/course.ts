import { Lesson } from "@prisma/client";

// Intersection
export type LessonWithPath = Lesson & {
    path: string;
};
