/*
 * Plugin Name: MentionMe for MyBB 1.6.x
 * Copyright 2013 WildcardSearch
 * http://www.wildcardsworld.com
 *
 * this file contains a class for the single mention functionality in mention.php
 */

var MentionMe = {
	Insert: function(pid, name)
	{
		var id = 'message';
		if(typeof clickableEditor != 'undefined')
		{
			id = clickableEditor.textarea;
		}
		$(id).value += '@"' + name + '"';
		$(id).focus();
	}
};