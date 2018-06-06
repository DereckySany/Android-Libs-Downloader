document.getElementById("dl-button").addEventListener("click", () => {
    const [_group, _name, version] = document.getElementById("dependency").value.split(":");
    const group = _group.replace(/\./g, "/"),
          name = _name.replace(/\./g, "/");
          
    let dl_url = `https://${
        document.getElementById("repo").checked
        ? "jitpack.io"
        : "maven.google.com"
        }/${group}/${name}/${version}/${name}-${version}.aar`;

    if (confirm(`Download ${dl_url}?`)) {
        window.open(dl_url);
    }
});
