function FindProxyForURL(url, host) {
    if (dnsDomainIs(host, ".azure.com"))
        return "SOCKS5 localhost:8080";
    else
        return "DIRECT";
}
