import os
import json
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build

# Define the scopes to request access to the Classroom API
SCOPES = ['https://www.googleapis.com/auth/classroom.coursework.students',
          'https://www.googleapis.com/auth/classroom.rosters',
          'https://www.googleapis.com/auth/classroom.courses.readonly']

credentialsPath = os.path.abspath(os.path.join(
    os.path.dirname(__file__), '..', 'configs', 'credentials.json'))

tokenPath = os.path.abspath(os.path.join(
    os.path.dirname(__file__), '..', 'configs', 'token.json'))

configPath = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'configs', 'conf.json'))

creds = None
if os.path.exists(tokenPath):
    creds = Credentials.from_authorized_user_file(
        tokenPath, SCOPES)
if not creds or not creds.valid:
    if creds and creds.expired and creds.refresh_token:
        creds.refresh(Request())
    else:
        flow = InstalledAppFlow.from_client_secrets_file(credentialsPath, SCOPES)
        creds = flow.run_local_server(port=0)
    with open(tokenPath, 'w') as token:
        token.write(creds.to_json())

# Create a service object for interacting with the Classroom API
service = build('classroom', 'v1', credentials=creds)

# Call the Classroom API to retrieve a list of courses
results = service.courses().list(pageSize=10).execute()
courses = results.get('courses', [])

# Create a list to store course information
course_list = []

# Save the course names and IDs in course_list
for course in courses:
    course_list.append({"name": course["name"], "id": course["id"]})

# Create the conf.json file
conf = {
    "markSystem": "",
    "courses": course_list,
    "selectedCourse": ""
}

with open(configPath, 'w') as conf_file:
    json.dump(conf, conf_file, indent=4)
