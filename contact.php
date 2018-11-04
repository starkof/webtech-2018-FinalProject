<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Contact US</title>

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
    <script src="http://code.jquery.com/jquery-latest.js"></script> <!--//jQuery Library -->
   <script src="http://ajax.aspnetcdn.com/ajax/jquery.validate/1.9/jquery.validate.min.js"></script> <!--//Validation Plugin -->
   <script src="js/myJs.js"></script>
  
    <script>
  $(document).ready(function(){ //Run this function when the page is finished loading.
     $("#sign-up").validate({ //Get the element with the id="sign-up" and run the validation plugin on it at default settings.
          errorPlacement: function(error, element) {
                  error.appendTo("label[for="+$(element).attr('id')+"]");
          },
          errorElement: "em"
     });
     $('form').removeAttr('novalidate');
  });
  </script>
</head>

<body> 
<?php require_once("form.php");  ?>

<nav class="navbar navbar-expand-sm navbar-light" style="background-color: #5e47ab; margin-bottom: 10px; margin-top: 5px">
    <div class="container-fluid">
        <a class="navbar-brand text-light" href="#">Ensign</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link text-light" href="index.html">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-light" href="games.html">Games</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-light" href="contact.php">Contact</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-light" href="about.html">About</a>
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-default my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    </div>
</nav>

<div class="container-fluid">
    <div class="form-area container">
        <form role="form" name="contact-form" onsubmit="return ValidateForm()"  method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
            <br style="clear:both">
            <h3 style="margin-bottom: 25px; text-align: center;">Contact us or give us some feedback</h3>
            <div class="form-group">
                <label for="first-name">First Name</label>
                <input required type="text" class="form-control" id="first-name" name="first-name">
                <span id="fname_error" class="error"></span>
            </div>
            <div class="form-group">
                <label for="last-name">Last Name</label>
                <input type="text" onchange="name_validation(this.value, this.id)" class="form-control" id="last-name" name="last-name" required>
                <span id="lname_error" class="error"></span>
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="text" onchange="email_validation(this.value, this.id)" class="form-control" id="email" name="email" required>
                <span id="email_error" class="error"></span>
            </div>
            <div class="form-group">
                <label for="subject">Subject</label>
                <input type="text" onchange="name_validation(this.value, this.id)" class="form-control" id="subject" name="subject" required>
            </div>
            <div class="form-group">
                <label for="message">Message</label>
                <textarea class="form-control" onchange="not_empty_validation(this.value, this.id)" type="textarea" id="message" name="message" maxlength="140" rows="7"></textarea>
            </div>
            <button type="button" id="submit" name="submit" class="btn btn-primary pull-right" >Submit Form</button>
        </form>
    
    </div>
</div>

<footer class="page-footer font-small blue pt-4" style="background-color: #dcc0ff; margin-top: 30px">
    <div class="container-fluid text-center text-md-left">
        <div class="row">
            <div class="col-sm-12">
                <h5 class="text-secondary" style="margin-bottom: 30px">Quick Links</h5>
            </div>
            <div class="col-sm-4">
                <ul class="list-unstyled">
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </div>
            <div class="col-sm-4">
                <ul class="list-unstyled">
                    <li>
                        <a href="#">Games</a>
                    </li>
                </ul>
            </div>
            <div class="col-sm-4">
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Email" aria-label="Search">
                    <button class="btn btn-outline-default my-2 my-sm-0" type="submit">Subscribe</button>
                </form>
            </div>
        </div>
    </div>
    <div class="footer-copyright text-center py-3">© 2018 Copyright:
        <a href="#">Ensign</a>
    </div>
</footer>
</body>

</html>