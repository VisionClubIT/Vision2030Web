<?php
require_once __DIR__."/../config/database.php";
$uploadDir = 'uploads';

$fileName = null;

function canUpload($file){

    $allowed = [
        'jpg' => 'image/jpeg',
        'png' => 'image/png',
        'gif' => 'image/gif',
    ];

    $maxFileSize = 10 * 1024 * 1024;

    $fileMimeType = mime_content_type($file['tmp_name']);
    $fileSize = $file['size'];

    if (!in_array($fileMimeType, $allowed)){
        return 'File type is not allowed';
    }

    if($fileSize > $maxFileSize) {
        return 'File size is not allowed. Allowed size is: ' .$maxFileSize;
    }

    return true;

}

//--------------------
 $documentError =  '';
//-------------------//--POST--//--------------------------------------------
if ($_SERVER['REQUEST_METHOD'] == 'POST'){



    if (isset($_FILES['image']) ) {

        $canUpload = canUpload($_FILES['image']);

        if ($canUpload === true){


            if (! is_dir($uploadDir)) {
                umask(0);
                mkdir($uploadDir, 0775);
            }

            // تغيير اسم الفايل عشان تفادي تشابه اسامي الصور
            $fileName = time().$_FILES['image']['name'];

            if (file_exists( $uploadDir.'/'.$fileName)) {
                $documentError = 'Your file already exists';
            }else {
                move_uploaded_file($_FILES['image']['tmp_name'], $uploadDir.'/'.$fileName);
            }



        }else {
            $documentError =  $canUpload;
        }
    }
}

