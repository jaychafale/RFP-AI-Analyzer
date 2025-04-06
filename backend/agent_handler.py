import os
import aiohttp
from dotenv import load_dotenv

load_dotenv()

RELEVANCE_API_KEY = os.getenv("RELEVANCE_API_KEY")
RELEVANCE_AGENT_ENDPOINT = os.getenv("RELEVANCE_AGENT_ENDPOINT")

async def analyze_file(file_bytes, filename):
    form_data = aiohttp.FormData()
    form_data.add_field("file", file_bytes, filename=filename)

    headers = {
        "Authorization": f"Bearer {RELEVANCE_API_KEY}"
    }

    async with aiohttp.ClientSession() as session:
        async with session.post(RELEVANCE_AGENT_ENDPOINT, data=form_data, headers=headers) as resp:
            if resp.status != 200:
                return {"error": f"Agent error: {resp.status}", "details": await resp.text()}
            return await resp.json()
