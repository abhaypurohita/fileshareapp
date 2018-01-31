import React, {Component} from 'react';

class HomeForm extends Component {
    render() {
        return (
            <div className={'app-card'}>
                <form>
                    <div className={'app-card-header'}>
                        <div className={'app-card-header-inner'}>
                            <div className={'app-file-select-zone'}>
                                <label htmlFor={'input-file'}>
                                    <input id={'input-file'} type={'file'} multiple={true} />
                                    <span className={'app-upload-icon'}></span>
                                    <span className={'app-upload-description'}>Drag and drop files here..</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className={'app-card-content'}>
                        <div className={'app-card-content-inner'}>
                            <div className={'app-form-item'}>
                                <label htmlFor={'to'}>Send To</label>
                                <input type={'email'} id={'to'} name={'to'} placeholder={'Email address'} />
                            </div>
                            <div className={'app-form-item'}>
                                <label htmlFor={'from'}>From</label>
                                <input type={'email'} id={'from'} name={'from'} placeholder={'Your Email address'} />
                            </div>
                            <div className={'app-form-item'}>
                                <label htmlFor={'message'}>Message</label>
                                <textarea name={'message'} id={'message'} placeholder={'Add a message (optional)'}></textarea>
                            </div>

                            <div className={'app-form-actions'}>
                                <button type={'submit'} className={'app-button primary'}>Send</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default HomeForm;