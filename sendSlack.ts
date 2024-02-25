import { expandGlob } from "https://deno.land/std/fs/expand_glob.ts";
const FILE_PATH = "./cypress/downloads"

const SLACK_TOKEN = Deno.env.get("SLACK_TOKEN");
const SLACK_CHANNEL = Deno.env.get("SLACK_CHANNEL");


for await (const entry of expandGlob(`${FILE_PATH}/*.pdf`)) {
    console.log(entry.name);
    const fileBytes = await Deno.readFile(`${FILE_PATH}/${entry.name}`);
    const fileBlob = new Blob([fileBytes], {type: 'application/pdf'});

    const today = new Date();
    today.setMonth(today.getMonth() + 1);
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const result = year + '年' + month + '月';

    const headers = {
        Authorization: `Bearer ${SLACK_TOKEN}`,
    };

    const formData = new FormData();
    formData.append("file", fileBlob);
    formData.append("filename", `${result}.pdf`);
    formData.append("channels", SLACK_CHANNEL);
    formData.append("title", `${result}.pdf`);

    const response = await fetch("https://slack.com/api/files.upload", {
        method: "POST",
        headers: headers,
        body: formData,
    })
    console.log(await response.json());
}
