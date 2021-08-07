mkdir -p /apps/
echo "INFO : Creating user network-overview"
useradd -d /app/network-overview network-overview -s /bin/bash -c "network-overview"
mkdir -p /logs/network-overview
chown network-overview:network-overview /logs/network-overview
echo "INFO : Copying network-overview service"
cp network-overview.service /etc/systemd/system/network-overview.service
echo "INFO : Copying network-overview configuration"
cp network-overview.conf /etc/sysconfig/network-overview.conf
source /etc/sysconfig/network-overview.conf
systemctl enable network-overview.service
systemctl restart network-overview.service
echo "INFO : Started network-overview at ${PORT}"
