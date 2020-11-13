import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { ListagemComponent } from 'src/app/modules/listagem/components/listagem/listagem.component';
import { HomeComponent } from './home.component';

describe('AppComponent', () => {

  let router: Router;

  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'listagem', component: ListagemComponent }
        ])
      ],
      declarations: [
        HomeComponent,
        ListagemComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;

    router = TestBed.get(Router);

    fixture.detectChanges();
  });

  it('Deve criar o componente',
    () => expect(component).toBeTruthy());

  it(`Deve conter o título 'angular'`, () =>
    expect(component.title).toEqual('angular'));

  it('Deve renderizar tag <h1/>', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent)
      .toContain('Welcome to angular!');
  });

  describe('Ao clicar no botão navegar para listagem', () => {

    beforeEach(() => {
      jest.spyOn(router, 'navigate');
    });

    it('Deve navegar para a página de listagem', () => {
      fixture.ngZone.run(() => {

        fixture.debugElement.query(By.css('#btnNavegarListagem'))
          .triggerEventHandler('click', null);

        expect(router.navigate).toHaveBeenCalledWith(['listagem']);
        expect(router.navigate).toHaveBeenCalledTimes(1);

      });

    });

  });

});
