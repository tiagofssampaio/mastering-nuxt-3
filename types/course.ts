import { Lesson } from "@prisma/client/edge";

// Intersection
export type LessonWithPath = Lesson & {
    path: string;
};
