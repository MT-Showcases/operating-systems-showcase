#!/usr/bin/env bash
# TechStartup srl — Script di reset ambiente laboratorio
# Ricrea utenti, gruppi e directory dall'inizio.
# Usa su un sistema Linux di test (VM o sandbox). NON usare in produzione.

set -e

echo "=== TechStartup Lab Reset ==="
echo "Rimozione configurazione precedente (se presente)..."

for u in marco sara luca giulia antonio valentina; do
  id "$u" &>/dev/null && sudo userdel -r "$u" && echo "  rimosso utente: $u" || true
done

for g in dev ops security; do
  getent group "$g" &>/dev/null && sudo groupdel "$g" && echo "  rimosso gruppo: $g" || true
done

sudo rm -rf /srv/techstartup && echo "  rimossa directory /srv/techstartup"

echo ""
echo "=== Creazione gruppi ==="
sudo groupadd dev
sudo groupadd ops
sudo groupadd security
echo "  gruppi creati: dev, ops, security"

echo ""
echo "=== Creazione utenti team dev ==="
sudo useradd -m -s /bin/bash -G dev marco
sudo useradd -m -s /bin/bash -G dev sara
sudo useradd -m -s /bin/bash -G dev luca
echo "  utenti creati: marco, sara, luca"

echo ""
echo "=== Creazione utenti team ops ==="
sudo useradd -m -s /bin/bash -G ops giulia
sudo useradd -m -s /bin/bash -G ops antonio
echo "  utenti creati: giulia, antonio"

echo ""
echo "=== Creazione utente security (multi-gruppo) ==="
sudo useradd -m -s /bin/bash valentina
sudo usermod -aG dev,ops,security valentina
echo "  utente creato: valentina (gruppi: dev, ops, security)"

echo ""
echo "=== Creazione struttura directory ==="
sudo mkdir -p /srv/techstartup/{codice,log,backup}
echo "  directory create: /srv/techstartup/{codice,log,backup}"

echo ""
echo "=== Ambiente pronto. Ora tocca a te configurare i permessi! ==="
echo "    Leggi il capitolo e segui i passi dal punto 8 in poi."
