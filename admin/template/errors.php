<?php
ini_set ('display_errors', 1);
ini_set ('display_startup_errors', 1);
error_reporting (E_ALL);
if(count($errors)): ?>

    <div class="alert alert-danger">
        <?php foreach ($errors as $error){ ?>
            <p><?php echo $error ?></p>
        <?php }; ?>
    </div>

<?php
endif;