import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { usersList } from 'src/mocks/users.mock';
import cpfMask from 'src/app/utils/masks/cpf'

import { CooperatedIdentificationComponent } from './cooperated-identification.component';

describe('CooperatedIdentificationComponent', () => {
  let component: CooperatedIdentificationComponent;
  let fixture: ComponentFixture<CooperatedIdentificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CooperatedIdentificationComponent ],
      imports: [FontAwesomeModule, FormsModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CooperatedIdentificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should format properly the input value', () => {

    const currentUser = usersList[0]
    const input = fixture.debugElement.nativeElement.querySelector("#input-search")

    input.value = currentUser.cpf;
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges()


    expect(component.cpfValue).toEqual(cpfMask(currentUser.cpf))
  });
});
