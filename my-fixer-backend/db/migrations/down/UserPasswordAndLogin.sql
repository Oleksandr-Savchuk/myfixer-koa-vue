START TRANSACTION;
  ALTER TABLE "user" DROP COLUMN "password";
  ALTER TABLE "user" DROP CONSTRAINT user_email;
  ALTER TABLE "user" DROP COLUMN email;
COMMIT;
