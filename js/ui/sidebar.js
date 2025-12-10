export function initSidebar(map, layers) {

    const sidebar = L.control.sidebar({
        autopan: false,      
        closeButton: true,
        container: "sidebar",
        position: "left"
    }).addTo(map);

   
    const menuBtn = document.getElementById("btn_sidebar");

    menuBtn.addEventListener("click", () => {
        if (sidebar.isVisible()) {
            sidebar.close();  
        } else {
            sidebar.show();   
        }
    });

    document.querySelectorAll(".leaflet-sidebar-tabs a").forEach(tab => {
        tab.addEventListener("click", e => {
            e.preventDefault();
            const paneId = tab.getAttribute("href").replace("#", "");
            sidebar.open(paneId); 
        });
    });

    return sidebar;
}
