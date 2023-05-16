function FindProxyForURL(url, host) {
    if (dnsDomainIs(host, "portal.azure.com") ||
        dnsDomainIs(host, ".microsoftonline.com.com"))
        return "SOCKS5 localhost:8080";
    else
        return "DIRECT";
}
