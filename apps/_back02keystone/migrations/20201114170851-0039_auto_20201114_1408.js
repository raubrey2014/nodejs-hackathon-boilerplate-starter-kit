// auto generated by kmigrator
// KMIGRATOR:0039_auto_20201114_1408:IyBHZW5lcmF0ZWQgYnkgRGphbmdvIDMuMS4yIG9uIDIwMjAtMTEtMTQgMTQ6MDgKCmZyb20gZGphbmdvLmRiIGltcG9ydCBtaWdyYXRpb25zLCBtb2RlbHMKCgpjbGFzcyBNaWdyYXRpb24obWlncmF0aW9ucy5NaWdyYXRpb24pOgoKICAgIGRlcGVuZGVuY2llcyA9IFsKICAgICAgICAoJ19kamFuZ29fc2NoZW1hJywgJzAwMzhfYXV0b18yMDIwMTExNF8xMzI3JyksCiAgICBdCgogICAgb3BlcmF0aW9ucyA9IFsKICAgICAgICBtaWdyYXRpb25zLkFsdGVyRmllbGQoCiAgICAgICAgICAgIG1vZGVsX25hbWU9J3Rlc3Rzb2Z0ZGVsZXRlZG9iaicsCiAgICAgICAgICAgIG5hbWU9J2RlbGV0ZWRBdCcsCiAgICAgICAgICAgIGZpZWxkPW1vZGVscy5EYXRlVGltZUZpZWxkKGJsYW5rPVRydWUsIGRiX2luZGV4PVRydWUsIG51bGw9VHJ1ZSksCiAgICAgICAgKSwKICAgIF0K

exports.up = async (knex) => {
    await knex.raw(`
    BEGIN;
--
-- Alter field deletedAt on testsoftdeletedobj
--
CREATE INDEX "TestSoftDeletedObj_deletedAt_c5f1b37f" ON "TestSoftDeletedObj" ("deletedAt");
COMMIT;

    `)
}

exports.down = async (knex) => {
    await knex.raw(`
    BEGIN;
--
-- Alter field deletedAt on testsoftdeletedobj
--
COMMIT;

    `)
}
