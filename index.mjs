import alt from 'alt';

alt.on("notifyFromServer", (sendedPlayer, text, type) => {

    const GetPlayerInfo = alt.Player.getByID(sendedPlayer);

    alt.emitClient(GetPlayerInfo, "notify:giveNotif", text, type);

})

alt.onClient("notifyFromClient", (player, text, type) => {

    alt.emitClient(player, "notify:giveNotif", text, type);

})