// auto generated by kmigrator
// KMIGRATOR:0014_auto_20200609_2040:IyBHZW5lcmF0ZWQgYnkgRGphbmdvIDMuMC42IG9uIDIwMjAtMDYtMDkgMjA6NDAKCmZyb20gZGphbmdvLmRiIGltcG9ydCBtaWdyYXRpb25zLCBtb2RlbHMKCgpjbGFzcyBNaWdyYXRpb24obWlncmF0aW9ucy5NaWdyYXRpb24pOgoKICAgIGRlcGVuZGVuY2llcyA9IFsKICAgICAgICAoJ19kamFuZ29fc2NoZW1hJywgJzAwMTNfcmVtb3ZlX29yZ2FuaXphdGlvbl9pc2FjdGl2ZScpLAogICAgXQoKICAgIG9wZXJhdGlvbnMgPSBbCiAgICAgICAgbWlncmF0aW9ucy5BZGRGaWVsZCgKICAgICAgICAgICAgbW9kZWxfbmFtZT0nb3JnYW5pemF0aW9udG91c2VybGluaycsCiAgICAgICAgICAgIG5hbWU9J2lzQWNjZXB0ZWQnLAogICAgICAgICAgICBmaWVsZD1tb2RlbHMuQm9vbGVhbkZpZWxkKGRlZmF1bHQ9RmFsc2UpLAogICAgICAgICAgICBwcmVzZXJ2ZV9kZWZhdWx0PUZhbHNlLAogICAgICAgICksCiAgICAgICAgbWlncmF0aW9ucy5BZGRGaWVsZCgKICAgICAgICAgICAgbW9kZWxfbmFtZT0nb3JnYW5pemF0aW9udG91c2VybGluaycsCiAgICAgICAgICAgIG5hbWU9J2lzUmVqZWN0ZWQnLAogICAgICAgICAgICBmaWVsZD1tb2RlbHMuQm9vbGVhbkZpZWxkKGRlZmF1bHQ9RmFsc2UpLAogICAgICAgICAgICBwcmVzZXJ2ZV9kZWZhdWx0PUZhbHNlLAogICAgICAgICksCiAgICBdCg==

exports.up = async (knex) => {
    await knex.raw(`
    BEGIN;
--
-- Add field isAccepted to organizationtouserlink
--
ALTER TABLE "OrganizationToUserLink" ADD COLUMN "isAccepted" boolean DEFAULT false NOT NULL;
ALTER TABLE "OrganizationToUserLink" ALTER COLUMN "isAccepted" DROP DEFAULT;
--
-- Add field isRejected to organizationtouserlink
--
ALTER TABLE "OrganizationToUserLink" ADD COLUMN "isRejected" boolean DEFAULT false NOT NULL;
ALTER TABLE "OrganizationToUserLink" ALTER COLUMN "isRejected" DROP DEFAULT;
COMMIT;

    `)
}

exports.down = async (knex) => {
    await knex.raw(`
    BEGIN;
--
-- Add field isRejected to organizationtouserlink
--
ALTER TABLE "OrganizationToUserLink" DROP COLUMN "isRejected" CASCADE;
--
-- Add field isAccepted to organizationtouserlink
--
ALTER TABLE "OrganizationToUserLink" DROP COLUMN "isAccepted" CASCADE;
COMMIT;

    `)
}
