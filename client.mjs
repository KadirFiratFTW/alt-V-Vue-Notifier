import native from 'natives';
import alt from 'alt';

const NotifUI = new alt.WebView("http://resource/html/index.html")

alt.onServer("notify:giveNotif", (text, type) => {

    NotifUI.emit("addNotif", text, type)
    
})