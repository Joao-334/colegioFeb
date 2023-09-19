<?php

namespace Unifeb\Repo;

use PDO;
use Unifeb\Model\Post;

class postRepository
{
    private PDO $pdo;
    public function __construct(
        PDO $pdo
    ) {
        $this->pdo = $pdo;
    }

    public function getPosts(int $limit = 6)
    {
        $stmt = $this->pdo->prepare("SELECT * FROM post_contents WHERE title REGEXP ? ORDER BY created_at DESC LIMIT ?");
        $stmt->bindValue(1, "Colégio Feb", PDO::PARAM_STR);
        $stmt->bindValue(2, $limit , PDO::PARAM_INT);
        $stmt->execute();

        $data = $stmt->fetchAll(PDO::FETCH_ASSOC);

        return $this->buildObjects($data);
    }

    private function buildObjects($data)
    {
        $newObjects = array_map(
            function ($item) {
                return new Post(
                    $item['post_id'],
                    $item['title'],
                    $item['body'],
                    $item['image']
                );
            }, $data
        );

        return $newObjects;
    }
}

/*
"API" para que não sejam exibidas as conecções, querys e etc no frontend
 */