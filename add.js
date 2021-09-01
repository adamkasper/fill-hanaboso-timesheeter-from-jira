import axios from 'axios'
import dotenv  from "dotenv"
import { readFile } from "fs/promises"
import dateFormat from "dateformat";

dotenv.config()

const HANABOSO_PROJECT = process.env.HANABOSO_PROJECT
const HANABOSO_HOMEOFFICE = process.env.HANABOSO_HOMEOFFICE
const JIRA_TS_FILENAME = process.env.JIRA_TS_FILENAME
const JIRA_TS_FILETYPE = 'utf8'
const AXIOS_INSTANCE = axios.create({
    baseURL: 'https://timesheeter-api.hanaboso.net/record/',
    timeout: 3600,
    headers: {
        'Authorization': process.env.AXIOS_AUTHORIZATION,
        'Cookie': process.env.AXIOS_COOKIE,
        'Content-Type': 'application/json; charset=UTF-8'
    }
});

async function getTSDataFromFile() {
    const fileContent = await readFile(JIRA_TS_FILENAME, JIRA_TS_FILETYPE)
    return JSON.parse(fileContent)
}

function createRequestData({
    issueKey,
    issueSummary,
    timeSpentSeconds,
    startedAt
}) {
    const now = new Date(startedAt);

    return {
        date: dateFormat(now, "yyyy-mm-dd"),
        desc: issueSummary,
        finishTime: null,
        homeOffice: HANABOSO_HOMEOFFICE,
        project: HANABOSO_PROJECT,
        startTime: null,
        ticket: issueKey.split('-').pop(),
        time: timeSpentSeconds / 3600, // one hour equals 1 as an integer 
    }
}

function submitRequest(records) {
    records.forEach(async (record) => {
        try {
            // await AXIOS_INSTANCE.post('add', createRequestData(record))
            console.log(createRequestData(record))
        } catch (error) {
            console.error(error.response?.data);
        }
    })
}

async function main() {
    const timesheeter = await getTSDataFromFile()
    submitRequest(timesheeter)
}

await main()
