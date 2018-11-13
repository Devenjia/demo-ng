import { Component, OnInit, Inject, Input } from '@angular/core';
import { MailService } from './mail.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  title = 'Hello, Angular';
  //获取鼠标点击事件
  onClick(event, value) {
    console.log(event);
    console.log(value);
  }
  //获取键盘Enter事件
  onEnter(event, value) {
    console.log(event);
    console.log(value);
  }
  onUpdate(id, text) {
    debugger
    this.mailService.update(id, text);
  }
  constructor(
    @Inject(MailService) private mailService,
    @Inject('apiUrl') private apiUrl,

  ) {

  }

  ngOnInit() {

  }

}
// const injector = RelfectiveInjector.resolveAndCreate([
//   // providers 数组定义了多个提供者，provide 属性定义令牌
//   // useXXX 定义怎样创建的方法
//   { provide: Person, useClass: Person },
//   { provide: Address, useFactory: () => {
//         if(env.testing)
//             return new Address('辽宁', '沈阳', '和平区', 'xx街xx号');
//         return new Address('北京', '北京', '朝阳区', 'xx街xx号');
//     } 
//   },
//   { provide: Id, useFactory: (type) => {
//         if(type === ID_TYPES.PASSPORT)
//             return Id.getInstance(ID_TYPES.PASSPORT, someparam);
//         if(type === ID_TYPES.IDCARD)
//             return Id.getInstance(ID_TYPES.IDCARD);
//         return Id.getDefaultInstance();
//     } 
//   }
// ]);