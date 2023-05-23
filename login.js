const loginButton = document.getElementById('login-button'); // Replace 'login-button' with the ID of your login button

loginButton.addEventListener('click', function() {
    window.location.href = 'https://steamcommunity.com/openid/login' +
        '?openid.ns=http://specs.openid.net/auth/2.0' +
        '&openid.mode=checkid_setup' +
        '&openid.return_to=' + encodeURIComponent(window.location.href) +
        '&openid.realm=' + encodeURIComponent(window.location.href) +
        '&openid.identity=http://specs.openid.net/auth/2.0/identifier_select' +
        '&openid.claimed_id=http://specs.openid.net/auth/2.0/identifier_select';
});