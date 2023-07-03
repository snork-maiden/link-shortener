import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from '../../environment';
import { LinkSqueezeService } from 'src/app/link-squeeze.service';


@Component({
  selector: 'app-add-link',
  templateUrl: './add-link.component.html',
  styleUrls: ['./add-link.component.scss']
})
export class AddLinkComponent {
  @Output() formSubmit = new EventEmitter<null>();

  shortLink: string = '';
  shortURL = environment.APIDomainShort;
  constructor(private linkSqueezeService: LinkSqueezeService) {}

  onSubmit(form: NgForm) {
    this.linkSqueezeService.squeeze(form.value.url).subscribe({
      next: (data) => {
        this.shortLink = data.short;
        this.formSubmit.emit();
      },
    });
    form.reset();
  }

  copyLinkToClipboard(linkCode: string) {
    navigator.clipboard.writeText(environment.APIDomain + '/s/' + linkCode);
  }
}