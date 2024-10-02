document.addEventListener('DOMContentLoaded', function () {
    // ボタンのIDをリストで管理
    const buttonIds = ['wakeup', 'toilet', 'change', 'breakfast', 'socks', 'hairstyle'];
    
    // 押されたボタンを記録するためのセット
    let clickedButtons = new Set();
    
    // 各ボタンのクリックイベントを設定
    buttonIds.forEach(id => {
        const button = document.getElementById(id);
        button.addEventListener('click', function () {
            clickedButtons.add(id); // セットに追加
            
            // 全ボタンが押されたか確認
            if (clickedButtons.size === buttonIds.length) {
                // 全てのボタンが押された場合、#celebration を表示
                const celebrationImage = document.getElementById('celebration');
                celebrationImage.style.display = 'block'; // 表示
                celebrationImage.style.opacity = '1'; // フェードイン
            }
        });
    });

    // リセットボタンの処理
    const resetButton = document.getElementById('reset');
    resetButton.addEventListener('click', function () {
        clickedButtons.clear(); // 押されたボタンの記録をリセット
        const celebrationImage = document.getElementById('celebration');
        celebrationImage.style.display = 'none'; // 完全に非表示
    });
});
