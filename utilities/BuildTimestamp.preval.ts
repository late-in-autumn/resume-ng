import dateFormat from "dateformat";
import preval from "next-plugin-preval";

async function getBuildTimestamp() {
   const timestamp = new Date();
   return { buildTimestamp: dateFormat(timestamp, "fullDate") };
}

export default preval(getBuildTimestamp());
