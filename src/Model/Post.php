<?php

namespace Unifeb\Model;
use Normalizer;
class Post
{
    private string $link;
    private string $title;
    private string $body;
    private string $postId;
    private string $image;
    public function __construct(
        string $postId,
        string $title,
        string $body,
        string $image,
    ) {
        $this->postId = $postId;
        $this->body = $body;
        $this->title = $title;
        $this->image = $image;
    }

    public function getTitle()
    {
        return $this->title;
    }

    public function getBody()
    {
        return $this->body;
    }

    public function getPostId()
    {
        return $this->postId;
    }

    public function getImage() {
        return $this->image;
    }

    public function getLink()
    {
        $base = $this->getTitle();

        $stepOne = mb_strtolower($base);
        $stepTwo = mb_ereg_replace(" ", '-', $stepOne);

        $normalized = Normalizer::normalize($stepTwo, Normalizer::NFD);
        $link = $this->getPostId() . "-" . preg_replace('/[\x{0300}-\x{036F}]/u', '', $normalized);

        return $link;
    }
}


/*
Modelo de Post para facilitar implementação no frontend
*/