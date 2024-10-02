document.addEventListener('DOMContentLoaded', function () {
    // フォームの送信を防ぐ
    const form = document.querySelector('form');
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // フォーム送信を防ぐ
    });

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
                celebrationImage.style.opacity = '1'; // 表示する
            }
        });
    });

    //
