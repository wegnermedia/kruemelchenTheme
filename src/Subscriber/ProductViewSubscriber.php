<?php namespace WegnermediaKruemelchenBaseTheme\Subscriber;

use Shopware\Core\Content\Product\SalesChannel\SalesChannelProductEntity;
use Shopware\Core\Framework\DataAbstractionLayer\EntityRepositoryInterface;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Criteria;
use Shopware\Core\Framework\DataAbstractionLayer\Search\EntitySearchResult;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Filter\EqualsFilter;
use Shopware\Storefront\Page\Product\ProductPageLoadedEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

class ProductViewSubscriber implements EventSubscriberInterface
{
    private EntityRepositoryInterface $productRepository;

    public function __construct(EntityRepositoryInterface $productRepository)
    {
        dd('here');
        $this->productRepository = $productRepository;
    }

    public function getVariantsOfProduct(SalesChannelProductEntity $product, Context $context): EntitySearchResult
    {
        $parentProduct = $product->getParent();
        if ($parentProduct != null) {
            // We need the parent product to find all variants
            $product = $parentProduct;
        }
        $criteria = new Criteria();
        $criteria->addFilter(new EqualsFilter('parentId',
            $product->getUniqueIdentifier()));
        return $this->productRepository->search($criteria, $context);
    }

    public static function getSubscribedEvents(): array
    {
        return [
            ProductPageLoadedEvent::class => ['addVariants'],
        ];
    }

    public function addVariants(ProductPageLoadedEvent $pEvent)
    {
        $products = $this->getVariantsOfProduct($product = $pEvent->getPage()->getProduct(), $pEvent->getContext());
        $matchingVariants = $products->getElements();
    }
}