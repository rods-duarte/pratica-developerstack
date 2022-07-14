-- CreateTable
CREATE TABLE "questions" (
    "id" SERIAL NOT NULL,
    "statement" TEXT NOT NULL,

    CONSTRAINT "questions_pkey" PRIMARY KEY ("id")
);
