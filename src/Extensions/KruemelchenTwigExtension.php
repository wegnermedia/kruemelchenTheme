<?php declare(strict_types=1);

namespace WegnermediaKruemelchenBaseTheme\Extensions;

use http\Client\Request;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class KruemelchenTwigExtension extends AbstractExtension
{
    public function getFunctions(): array
    {
        return [
            new TwigFunction('whatsAppUrl', [$this, 'toWhatsAppUrl']),
            new TwigFunction('phoneUrl', [$this, 'toPhoneUrl']),
            new TwigFunction('toParagraphs', [$this, 'toParagraphs']),
            new TwigFunction('ucwords', [$this, 'toUcWords']),
            new TwigFunction('concat', [$this, 'toConcat']),
            new TwigFunction('activeCategoryClass', [$this, 'activeCategoryClass']),
            new TwigFunction('display_breadcrumbs', [$this, 'displayBreadcrumbs']),
        ];
    }

    /**
     * Convert a Human readable number into a url usable string
     *
     * @param $number
     * @param string $prefix
     * @return string
     */
    public function toPhoneUrl(string $number, string $prefix = '+'): string
    {
        return $prefix . preg_replace('/(\\D|0+?)/ui', '', $number);
    }

    /**
     * @param $number
     * @param null $message
     * @return string
     */
    public function toWhatsAppUrl(string $number, $message = null): string
    {
        $stripped = $this->toPhoneUrl($number, '');
        $message = is_string($message) ? urlencode($message): '';

        return "https://wa.me/{$stripped}?text={$message}";
    }

    public function toParagraphs($text)
    {
        return htmlspecialchars_decode('<p>' . preg_replace('/\\n{2}/ui', '</p><p>', $text) . '</p>');
    }

    public function toUcWords($string)
    {
        return ucwords($string);
    }

    public function toConcat($string1, $string2)
    {
        return $string1 . $string2;
    }

    public function activeCategoryClass($id = null)
    {
        $params = $_GET;

        if ( ! array_key_exists('categories', $params) ) {
            if (  is_null($id))
            return "active";
        } else {
            if ( $params['categories'] == $id)
                return "active";
        }

        return '';
    }

    public function displayBreadcrumbs($breadcrumb = null)
    {
        if (is_null($breadcrumb) || empty($breadcrumb) )
            return false;

        if (is_array($breadcrumb)){

            $categories = ['Blog', 'blog'];

            foreach( $categories as $category )
            {
                if ( in_array($category, $breadcrumb, ))
                    return false;
            }


        }

        return true;
    }

}
