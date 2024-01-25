function ejercicio9() {
    let edadJuan = document.getElementById("inptEjercicio9edadJuan").value;
    let edadMario = document.getElementById("inptEjercicio9edadMario").value;
    let edadPedro = document.getElementById("inptEjercicio9edadPedro").value;
    
    if (edadJuan == edadMario && edadJuan == edadPedro) {
        return window.alert("Juan, Mario y Pedro son contemporáneos")
    } else {
        if (edadJuan == edadMario) {
            return window.alert("Juan y Mario son contemporáneos")
        } else {
            if (edadJuan == edadPedro) {
                return window.alert("Juan y Pedro son contemporáneos")
            } else {
                if (edadPedro == edadMario) {
                    return window.alert("Pedro y Mario son contemporáneos")
                } else {
                    return window.alert("Ninguno es contemporáneo")
                }
            }
        }
    }
}