var quantidade_de_gols = prompt("Digite a quantidade de gols:")
var quantidade_de_passes_certos = prompt("Digite a quantidade de passes certos:")
var quantidade_de_passes_errados = prompt("Digite a quantidade de passes errados:")

var pontos = (quantidade_de_gols * 50) + (quantidade_de_passes_certos * 10) + (quantidade_de_passes_errados * -5)

if (pontos < 50) {
    alert("Péssima partida")
} else if (pontos >= 50 && pontos < 100) {
    alert("Partida ruim")
} else if (pontos >= 100 && pontos < 150) {
    alert("Fez o básico")
} else if (pontos >= 150 && pontos < 200) {
    alert("Jogou bem")
} else {
    alert("Jogou demais.")
}
