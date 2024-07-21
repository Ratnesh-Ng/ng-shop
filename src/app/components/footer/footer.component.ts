import { Component } from '@angular/core';
import { FooterInfo, FooterLinksGroup } from '../modals/footer';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  standalone: true,
  imports: [CommonModule,RouterModule]
})
export class FooterComponent {

  footerLinks: FooterLinksGroup[] = [
    {
      groupTitle: "Online Shopping",
      group: [
        {
          title: "Men",
          link: ""
        },
        {
          title: "Women",
          link: ""
        },
        {
          title: "Kids",
          link: ""
        },
        {
          title: "Home & Living",
          link: ""
        },
        {
          title: "Beauty",
          link: ""
        },
        {
          title: "Gift Card",
          link: ""
        }
      ]
    },
    {
      groupTitle: "Customer Policies",
      group: [
        {
          title: "Contact us",
          link: ""
        },
        {
          title: "FAQ",
          link: ""
        },
        {
          title: "T&C",
          link: ""
        },
        {
          title: "Terms of Use",
          link: ""
        },
        {
          title: "Track Orders",
          link: ""
        },
        {
          title: "Shipping",
          link: ""
        },
        {
          title: "Cancellation",
          link: ""
        },
        {
          title: "Returns",
          link: ""
        },
        {
          title: "Privacy Policy",
          link: ""
        },
        {
          title: "Grievance Officer",
          link: ""
        },
      ]
    },
    {
      groupTitle: "Useful links",
      group: [
        {
          title: "Blog",
          link: ""
        },
        {
          title: "Careers",
          link: ""
        },
        {
          title: "Site Map",
          link: ""
        },
        {
          title: "Corporate Information",
          link: ""
        }
      ]
    }
  ]

  footerInfo: FooterInfo[] = [
    {
      title: "MEN'S SHOPPING AT NG-Shop: A SUPERIOR EXPERIENCE",
      description: "NG-Shop is one of the best sites when it comes to online shopping for men. The finest of material, superior design and unbeatable style go into the making of our men’s shopping collection. Our range of online shopping men’s wear, accessories, footwear and personal care products are second to none. Compared with other men’s shopping sites, NG-Shop brings you the best price products which won’t hurt your pocket. With seasonal discounts on trendy casual wear, suits, blazers, sneakers and more, online shopping for men at NG-Shop just gets even more irresistible!"
    },
    {
      title: "MEN'S SHOPPING MADE EASY AT NG-Shop",
      description: "NG-Shop is the most convenient men's online store, what with our simplified shopping and payment procedures. With just a few clicks of the mouse or taps on your smartphone, you can buy your favorites from the best men's brands right away."
    }
  ]
}
