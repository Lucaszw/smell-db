let deviceCache, characteristicCache;

async function requestBluetoothDevice() {
    console.log('Requesting bluetooth device...');
  
    let device = await navigator.bluetooth.requestDevice({
      filters: [{services: [0xFFE0]}]
    });

    console.log(`'${device.name}' bluetooth device selected`);
    deviceCache = device;
    return deviceCache;
}

async function startNotifications(characteristic, handler) {
    console.log('Starting notifications...');
    await characteristic.startNotifications();
    console.log('Notifications started');
    characteristic.addEventListener('characteristicvaluechanged',handler);
}

async function connectDeviceAndCacheCharacteristic(device) {
    if (device.gatt.connected && characteristicCache) {
      return characteristicCache;
    }
    console.log('Connecting to GATT server...');
    let server = await device.gatt.connect();
    console.log('GATT server connected, getting service...');
    let service = await server.getPrimaryService(0xFFE0);
    console.log('Service found, getting characteristic...');
    let characteristic = await service.getCharacteristic(0xFFE1);
    console.log('Characteristic found');
    characteristicCache = characteristic;
    return characteristicCache;
}


window.connectBluetooth = async function() {

}

class Bluetooth {
    async connect() {
        if (deviceCache) return deviceCache;

        try {
            let device = await requestBluetoothDevice();
            let characteristic = await connectDeviceAndCacheCharacteristic(device);
            characteristic = await startNotifications(characteristic, this.messageReceived.bind(this));        
        } catch (error) {
            console.error(error);
        }
    }

    async messageReceived(event) {
        // Implement me
        let value = new TextDecoder().decode(event.target.value);
        console.log("Received card");
        console.log(value);
    }
}

export default new Bluetooth();