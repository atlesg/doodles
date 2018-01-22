function PlayerAndCameraPositionManager(camera, player) {
    this.player = player

    const cameraHeightRelativeToPlayer = .7
    const playerPositionRelativeToCamera = 2

    const baseLevelHeight = 5
    const secondLevelHeight = baseLevelHeight + 10

    player.position.y = baseLevelHeight
    
    this.setPosition = function(radius, angle) {
        camera.position.x = radius * cos(angle)
        camera.position.y = player.position.y + cameraHeightRelativeToPlayer
        camera.position.z = radius * sin(angle)
        camera.lookAt(new THREE.Vector3(0,0,0))
    
        player.position.x = (radius -playerPositionRelativeToCamera) * cos(angle)
        player.position.z = (radius -playerPositionRelativeToCamera) * sin(angle)

        player.rotation.y = -angle
    }

    this.changeHeightLevel = function(newHeightLevel) {
        if(newHeightLevel === 0) {
            const tween = new TWEEN.Tween(player.position)
                .to({ y: baseLevelHeight }, 600)
                .easing(TWEEN.Easing.Cubic.InOut)
                .start();
        } else {            
            const tween = new TWEEN.Tween(player.position)
                .to({ y: secondLevelHeight }, 600)
                .easing(TWEEN.Easing.Cubic.InOut)
                .start();
        }
    }
}