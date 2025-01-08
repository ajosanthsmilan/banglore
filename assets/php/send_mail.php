<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Your email where the message will be sent
    $to = "ajosanthsmilan@gmail.com";
    $subject = "New Contact Message from $name";

    // Email body
    $body = "You have received a new message from your website contact form.\n\n" .
            "Here are the details:\n" .
            "Name: $name\n" .
            "Email: $email\n" .
            "Message:\n$message";

    // Email headers
    $headers = "From: $email\n";
    $headers .= "Reply-To: $email";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "<script>alert('Message sent successfully!'); window.location.href='index.html';</script>";
    } else {
        echo "<script>alert('Failed to send the message. Please try again.'); window.location.href='index.html';</script>";
    }
} else {
    header("Location: index.html");
    exit();
}
?>
