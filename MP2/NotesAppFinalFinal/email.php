<?php

define("SMTP_HOST", "smtp.gmail.com");
define("SMTP_PORT", "587");

define("EMAIL_ACCOUNT", "onlinenotesapp1311@gmail.com");
define("EMAIL_PASSWORD", "itqxskscwapndqef");
define("EMAIL_TITLE", "Note title activation");
define("EMAIL_ADDRESS", "Online Note App");


function sendEmail($email, $subject, $message, $from = EMAIL_ACCOUNT){

	date_default_timezone_set('Asia/Manila');

    // $header = "From: $from \r\n";
    // $header .= "MIME-Version: 1.0\r\n";
    // $header .= "Content-type: text/html\r\n";

    // return mail($email, $subject, $message, $header);
	
	require 'mailing/PHPMailerAutoload.php';

	$mail = new PHPMailer;

	$mail->isSMTP(); 
	$mail->SMTPDebug = 0;
	
	/* $mail->SMTPOptions = array(
		'ssl' => array(
		'verify_peer' => false,
		'verify_peer_name' => false,
		'allow_self_signed' => true
		)
	); */

	$mail->Debugoutput = 'html';

  $mail->Host = SMTP_HOST;
  $mail->Port = SMTP_PORT;
  $mail->SMTPSecure = 'tls';

  $mail->SMTPAuth = true;

  $mail->Username = EMAIL_ACCOUNT;
  $mail->Password = EMAIL_PASSWORD;

  $mail->setFrom($from, EMAIL_TITLE);

  $mail->addReplyTo($from, 'REPLY EMAIL');
  $mail->addAddress($email, EMAIL_ADDRESS);
	$mail->Subject = $subject;

	$mail->msgHTML($message);
	
	$mail->altBody = $message;


	//send the message, check for errors
	if (!$mail->send()) {
		return false;
	} else {
		return true;
	}

}
