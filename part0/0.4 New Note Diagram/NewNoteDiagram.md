```mermaid 
sequenceDiagram 
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    server-->>browser: URL redirect /notes
    deactivate server

    Note left of server: The server creates a new note object based on the body of the POST request and adds to the notes array, then sends a URL redirect.

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server 
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server 
    server-->>browser : CSS file 
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server 
    server-->>browser: JavaScript file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server  
    server-->>browser: JSON file 
    deactivate server 
    
    Note left of server: The server sends the array of notes including the newly added note for the browser to render 