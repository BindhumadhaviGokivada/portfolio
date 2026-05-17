$port = 8080
$path = "c:\Users\USER\bindhu31"

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
$listener.Start()

Write-Host "Server listening on http://localhost:$port/"
Start-Process "http://localhost:$port/"

try {
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response
        
        $localFilePath = Join-Path $path $request.Url.LocalPath.Replace('/', '\')
        if ((Get-Item $localFilePath -ErrorAction SilentlyContinue) -is [System.IO.DirectoryInfo]) {
            $localFilePath = Join-Path $localFilePath "index.html"
        }
        
        if (Test-Path $localFilePath) {
            $content = [System.IO.File]::ReadAllBytes($localFilePath)
            $response.ContentLength64 = $content.Length
            
            if ($localFilePath.EndsWith(".html")) { $response.ContentType = "text/html" }
            elseif ($localFilePath.EndsWith(".css")) { $response.ContentType = "text/css" }
            elseif ($localFilePath.EndsWith(".jsx")) { $response.ContentType = "text/babel" }
            elseif ($localFilePath.EndsWith(".js")) { $response.ContentType = "application/javascript" }
            
            $response.StatusCode = 200
            $response.OutputStream.Write($content, 0, $content.Length)
        } else {
            $response.StatusCode = 404
        }
        $response.Close()
    }
} catch {
    Write-Host "Server stopped."
} finally {
    $listener.Stop()
}
