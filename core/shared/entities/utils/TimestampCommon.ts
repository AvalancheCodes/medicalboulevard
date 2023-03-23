import { Timestamp } from "firebase/firestore";

export type TimestampCommon = Omit<Timestamp, "toJSON">;
