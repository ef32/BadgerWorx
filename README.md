# Environment 

To run this application , you will need to have vs code installed.
To download vs code , visit https://code.visualstudio.com/download

## Framework | Prerequisites
The application lifecycle runs using pure HTML/CSS, Javascript ES6 , and Dotnet core and a small web server call live server.

## Dotnet
Follow these instructions to install Dotnet:

To install please visit;
windows : https://learn.microsoft.com/en-us/dotnet/core/install/windows#install-with-visual-studio-code 
Mac : https://learn.microsoft.com/en-us/dotnet/core/install/macos
Linux: https://learn.microsoft.com/en-us/dotnet/core/install/linux

Follow the instructions as advised.

Once installed and Paths are registered

-- Get a trusted certificate by running:
`dotnet dev-certs https --trust`

--Navigate to the `BadgerWorxApi` folder and run the following command: 
`dotnet run --launch-profile https`

That should host the api on your localhost - `https://localhost:7082`

## Live Server
Download live server from VS code extensions.
Live server enables es6 modules run on the web server as es6 does not like reading scripts from the file system

When installed, right click on the index html file and open using Live server.

It should start the application hosted on `http://127.0.0.1:5500`.

At the bottom right of vs code, you should see the port number . You can stop the server clicking on that port number when done.

## Possible Issues

If you use a Linux distro , please follow the distro's instructions on trusting a dotnet certificate. The command for trusting the dotnet certificate above, only works for MACOS and Windows. You can try folloeing the instructions here : https://github.com/tmds/linux-dev-certs


Please reach out if any concerns.

## Login
To Log in to the application please use the following credentials:

- username : `johndoe@xxx.com`
- password : `aliceandbob`

Other credentials may not work and that scenario has been catered for.

