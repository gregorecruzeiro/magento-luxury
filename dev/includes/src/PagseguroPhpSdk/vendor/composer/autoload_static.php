<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit4de98e27c0b4f27ebf5d9caa55ad7d8e
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'PagSeguro\\' => 10,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'PagSeguro\\' => 
        array (
            0 => __DIR__ . '/../..' . '/source',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit4de98e27c0b4f27ebf5d9caa55ad7d8e::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit4de98e27c0b4f27ebf5d9caa55ad7d8e::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}