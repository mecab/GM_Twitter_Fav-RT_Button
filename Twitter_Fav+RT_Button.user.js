// ==UserScript==
// @name        Twitter Fav+RT Button
// @author	mecab
// @namespace   http://mecab.misosi.ru/
// @description	Add Fav+RT button to Twitter Web
// @include     https://twitter.com/*
// @version     1.0
// @require	http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @grant	GM_setValue
// @grant	GM_getValue
// @license	MIT License
// ==/UserScript==

$(document).on('click', '.favrt', function(){
    var fav_target = $(this).parent().parent().find('.js-toggle-fav .favorite');
    if (fav_target.css('display') != 'none') {
	fav_target.get(0).click();
    }

    var rt_target = $(this).parent().parent().find('.js-toggle-rt .retweet');
    if (rt_target.css('display') != 'none') {
	rt_target.get(0).click();
    }

    return false;
});

$(document).on('mouseenter', '.js-stream-item', function(){
    if ($(this).attr('data-favrt-processed')) {
	return;
    }

    $(this).find('.tweet-actions').append('<li><a class="with-icn favrt" href="#" role="button">♪<b>Fav &amp; RT</b></a></li>');
    $(this).attr('data-favrt-processed', true);
});

