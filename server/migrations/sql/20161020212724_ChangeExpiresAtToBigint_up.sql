ALTER TABLE tokens
  ALTER COLUMN expires_at SET DATA TYPE BIGINT USING (0::BIGINT);
