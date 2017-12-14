/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { JhiDateUtils, JhiDataUtils, JhiEventManager } from 'ng-jhipster';
import { ApiGatewayTestModule } from '../../../test.module';
import { MockActivatedRoute } from '../../../helpers/mock-route.service';
import { UserpreferenceDetailComponent } from '../../../../../../main/webapp/app/entities/userpreference/userpreference-detail.component';
import { UserpreferenceService } from '../../../../../../main/webapp/app/entities/userpreference/userpreference.service';
import { Userpreference } from '../../../../../../main/webapp/app/entities/userpreference/userpreference.model';

describe('Component Tests', () => {

    describe('Userpreference Management Detail Component', () => {
        let comp: UserpreferenceDetailComponent;
        let fixture: ComponentFixture<UserpreferenceDetailComponent>;
        let service: UserpreferenceService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [ApiGatewayTestModule],
                declarations: [UserpreferenceDetailComponent],
                providers: [
                    JhiDateUtils,
                    JhiDataUtils,
                    DatePipe,
                    {
                        provide: ActivatedRoute,
                        useValue: new MockActivatedRoute({id: 123})
                    },
                    UserpreferenceService,
                    JhiEventManager
                ]
            }).overrideTemplate(UserpreferenceDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(UserpreferenceDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(UserpreferenceService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new Userpreference(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.userpreference).toEqual(jasmine.objectContaining({id: 10}));
            });
        });
    });

});
