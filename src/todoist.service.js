const axios = require('axios');
const uuidv4 = require('uuid/v4');

const todoistBaseUrl = `https://api.todoist.com/rest/v1/`;

const todoistApiToken = process.env.TODOIST_API_TOKEN;

const todoistApi = axios.create({
  baseURL: todoistBaseUrl,
  timeout: 1000,
  headers: {
    Authorization: `Bearer ${todoistApiToken}`,
    'Content-Type': 'application/json',
    'X-Request-Id': `${uuidv4()}`
  }
});

export async function addProject(projectName) {
  const resp = await todoistApi.post('/projects', { name: projectName });
  return resp.data;
}
