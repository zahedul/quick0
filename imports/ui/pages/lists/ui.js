/**
 * Created by zahed on 2/10/17.
 */
import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';

export default class Auth0List extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="container">
        <div className="mail-box">
          <aside className="sm-side">
            <div className="user-head">
              <a className="inbox-avatar" href="#">
                <img width="64" height="60" src="http://bootsnipp.com/img/avatars/ebeb306fd7ec11ab68cbcaa34282158bd80361a7.jpg" />
              </a>
              <div className="user-name">
                <h5><a href="#">Alireza Zare</a></h5>
                <span><a href="#">Info.Ali.Pci@Gmail.com</a></span>
              </div>
              <a className="mail-dropdown pull-right" href="#">
                <i className="fa fa-chevron-down"></i>
              </a>
            </div>
            <div className="inbox-body">
              <a href="#myModal" data-toggle="modal" title="Compose" className="btn btn-compose">
                Compose
              </a>
              <!-- Modal -->
              <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="myModal"
                   className="modal fade" style="display: none;">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button aria-hidden="true" data-dismiss="modal" className="close" type="button">×</button>
                      <h4 className="modal-title">Compose</h4>
                    </div>
                    <div className="modal-body">
                      <form role="form" className="form-horizontal">
                        <div className="form-group">
                          <label className="col-lg-2 control-label">To</label>
                          <div className="col-lg-10">
                            <input type="text" placeholder="" id="inputEmail1" className="form-control" />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-lg-2 control-label">Cc / Bcc</label>
                          <div className="col-lg-10">
                            <input type="text" placeholder="" id="cc" className="form-control" />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-lg-2 control-label">Subject</label>
                          <div className="col-lg-10">
                            <input type="text" placeholder="" id="inputPassword1" className="form-control" />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-lg-2 control-label">Message</label>
                          <div className="col-lg-10">
                            <textarea rows="10" cols="30" className="form-control" id="" name=""></textarea>
                          </div>
                        </div>

                        <div className="form-group">
                          <div className="col-lg-offset-2 col-lg-10">
                            <span className="btn green fileinput-button">
                              <i className="fa fa-plus fa fa-white"></i>
                              <span>Attachment</span>
                              <input type="file" name="files[]" multiple=""/>
                            </span>
                            <button className="btn btn-send" type="submit">Send</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <!-- /.modal-content -->
                </div>
                <!-- /.modal-dialog -->
              </div>
              <!-- /.modal -->
            </div>
            <ul className="inbox-nav inbox-divider">
              <li className="active">
                <a href="#"><i className="fa fa-inbox"></i> Inbox
                  <span className="label label-danger pull-right">2</span>
                </a>
              </li>
              <li>
                <a href="#"><i className="fa fa-envelope-o"></i> Sent Mail</a>
              </li>
              <li>
                <a href="#"><i className="fa fa-bookmark-o"></i> Important</a>
              </li>
              <li>
                <a href="#"><i className=" fa fa-external-link"></i> Drafts <span
                  className="label label-info pull-right">30</span></a>
              </li>
              <li>
                <a href="#"><i className=" fa fa-trash-o"></i> Trash</a>
              </li>
            </ul>
            <ul className="nav nav-pills nav-stacked labels-info inbox-divider">
              <li><h4>Labels</h4></li>
              <li><a href="#"> <i className=" fa fa-sign-blank text-danger"></i> Work </a></li>
              <li><a href="#"> <i className=" fa fa-sign-blank text-success"></i> Design </a></li>
              <li><a href="#"> <i className=" fa fa-sign-blank text-info "></i> Family </a>
              </li>
              <li><a href="#"> <i className=" fa fa-sign-blank text-warning "></i> Friends </a>
              </li>
              <li><a href="#"> <i className=" fa fa-sign-blank text-primary "></i> Office </a>
              </li>
            </ul>
            <ul className="nav nav-pills nav-stacked labels-info ">
              <li><h4>Buddy online</h4></li>
              <li><a href="#"> <i className=" fa fa-circle text-success"></i>Alireza Zare <p>I do not think</p></a></li>
              <li><a href="#"> <i className=" fa fa-circle text-danger"></i>Dark Coders<p>Busy with coding</p></a></li>
              <li><a href="#"> <i className=" fa fa-circle text-muted "></i>Mentaalist <p>I out of control</p></a>
              </li>
              <li><a href="#"> <i className=" fa fa-circle text-muted "></i>H3s4m<p>I am not here</p></a>
              </li>
              <li><a href="#"> <i className=" fa fa-circle text-muted "></i>Dead man<p>I do not think</p></a>
              </li>
            </ul>

            <div className="inbox-body text-center">
              <div className="btn-group">
                <a className="btn mini btn-primary" href="javascript:;">
                  <i className="fa fa-plus"></i>
                </a>
              </div>
              <div className="btn-group">
                <a className="btn mini btn-success" href="javascript:;">
                  <i className="fa fa-phone"></i>
                </a>
              </div>
              <div className="btn-group">
                <a className="btn mini btn-info" href="javascript:;">
                  <i className="fa fa-cog"></i>
                </a>
              </div>
            </div>

          </aside>
          <aside className="lg-side">
            <div className="inbox-head">
              <h3>Inbox</h3>
              <form action="#" className="pull-right position">
                <div className="input-append">
                  <input type="text" className="sr-input" placeholder="Search Mail" />
                  <button className="btn sr-btn" type="button">
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </form>
            </div>
            <div className="inbox-body">
              <div className="mail-option">
                <div className="chk-all">
                  <input type="checkbox" className="mail-checkbox mail-group-checkbox" />
                  <div className="btn-group">
                    <a data-toggle="dropdown" href="#" className="btn mini all" aria-expanded="false">
                      All
                      <i className="fa fa-angle-down "></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li><a href="#"> None</a></li>
                      <li><a href="#"> Read</a></li>
                      <li><a href="#"> Unread</a></li>
                    </ul>
                  </div>
                </div>

                <div className="btn-group">
                  <a data-original-title="Refresh" data-placement="top" data-toggle="dropdown" href="#"
                     className="btn mini tooltips">
                    <i className=" fa fa-refresh"></i>
                  </a>
                </div>
                <div className="btn-group hidden-phone">
                  <a data-toggle="dropdown" href="#" className="btn mini blue" aria-expanded="false">
                    More
                    <i className="fa fa-angle-down "></i>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a href="#"><i className="fa fa-pencil"></i> Mark as Read</a></li>
                    <li><a href="#"><i className="fa fa-ban"></i> Spam</a></li>
                    <li className="divider"></li>
                    <li><a href="#"><i className="fa fa-trash-o"></i> Delete</a></li>
                  </ul>
                </div>
                <div className="btn-group">
                  <a data-toggle="dropdown" href="#" className="btn mini blue">
                    Move to
                    <i className="fa fa-angle-down "></i>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a href="#"><i className="fa fa-pencil"></i> Mark as Read</a></li>
                    <li><a href="#"><i className="fa fa-ban"></i> Spam</a></li>
                    <li className="divider"></li>
                    <li><a href="#"><i className="fa fa-trash-o"></i> Delete</a></li>
                  </ul>
                </div>

                <ul className="unstyled inbox-pagination">
                  <li><span>1-50 of 234</span></li>
                  <li>
                    <a className="np-btn" href="#"><i className="fa fa-angle-left  pagination-left"></i></a>
                  </li>
                  <li>
                    <a className="np-btn" href="#"><i className="fa fa-angle-right pagination-right"></i></a>
                  </li>
                </ul>
              </div>
              <table className="table table-inbox table-hover">
                <tbody>
                <tr className="unread">
                  <td className="inbox-small-cells">
                    <input type="checkbox" className="mail-checkbox" />
                  </td>
                  <td className="inbox-small-cells"><i className="fa fa-star"></i></td>
                  <td className="view-message  dont-show">PHPclassName</td>
                  <td className="view-message ">Added a new className: Login className Fast Site</td>
                  <td className="view-message  inbox-small-cells"><i className="fa fa-paperclip"></i></td>
                  <td className="view-message  text-right">9:27 AM</td>
                </tr>
                <tr className="unread">
                  <td className="inbox-small-cells">
                    <input type="checkbox" className="mail-checkbox" />
                  </td>
                  <td className="inbox-small-cells"><i className="fa fa-star"></i></td>
                  <td className="view-message dont-show">Google Webmaster</td>
                  <td className="view-message">Improve the search presence of WebSite</td>
                  <td className="view-message inbox-small-cells"></td>
                  <td className="view-message text-right">March 15</td>
                </tr>
                <tr className="">
                  <td className="inbox-small-cells">
                    <input type="checkbox" className="mail-checkbox" />
                  </td>
                  <td className="inbox-small-cells"><i className="fa fa-star"></i></td>
                  <td className="view-message dont-show">JW Player</td>
                  <td className="view-message">Last Chance: Upgrade to Pro for</td>
                  <td className="view-message inbox-small-cells"></td>
                  <td className="view-message text-right">March 15</td>
                </tr>
                <tr className="">
                  <td className="inbox-small-cells">
                    <input type="checkbox" className="mail-checkbox" />
                  </td>
                  <td className="inbox-small-cells"><i className="fa fa-star"></i></td>
                  <td className="view-message dont-show">Tim Reid, S P N</td>
                  <td className="view-message">Boost Your Website Traffic</td>
                  <td className="view-message inbox-small-cells"></td>
                  <td className="view-message text-right">April 01</td>
                </tr>
                <tr className="">
                  <td className="inbox-small-cells">
                    <input type="checkbox" className="mail-checkbox" />
                  </td>
                  <td className="inbox-small-cells"><i className="fa fa-star inbox-started"></i></td>
                  <td className="view-message dont-show">Freelancer.com <span className="label label-danger pull-right">urgent</span>
                  </td>
                  <td className="view-message">Stop wasting your visitors</td>
                  <td className="view-message inbox-small-cells"></td>
                  <td className="view-message text-right">May 23</td>
                </tr>
                <tr className="">
                  <td className="inbox-small-cells">
                    <input type="checkbox" className="mail-checkbox" />
                  </td>
                  <td className="inbox-small-cells"><i className="fa fa-star inbox-started"></i></td>
                  <td className="view-message dont-show">WOW Slider</td>
                  <td className="view-message">New WOW Slider v7.8 - 67% off</td>
                  <td className="view-message inbox-small-cells"><i className="fa fa-paperclip"></i></td>
                  <td className="view-message text-right">March 14</td>
                </tr>
                <tr className="">
                  <td className="inbox-small-cells">
                    <input type="checkbox" className="mail-checkbox" />
                  </td>
                  <td className="inbox-small-cells"><i className="fa fa-star inbox-started"></i></td>
                  <td className="view-message dont-show">LinkedIn Pulse</td>
                  <td className="view-message">The One Sign Your Co-Worker Will Stab</td>
                  <td className="view-message inbox-small-cells"><i className="fa fa-paperclip"></i></td>
                  <td className="view-message text-right">Feb 19</td>
                </tr>
                <tr className="">
                  <td className="inbox-small-cells">
                    <input type="checkbox" className="mail-checkbox" />
                  </td>
                  <td className="inbox-small-cells"><i className="fa fa-star"></i></td>
                  <td className="view-message dont-show">Drupal Community<span
                    className="label label-success pull-right">megazine</span></td>
                  <td className="view-message view-message">Welcome to the Drupal Community</td>
                  <td className="view-message inbox-small-cells"></td>
                  <td className="view-message text-right">March 04</td>
                </tr>
                <tr className="">
                  <td className="inbox-small-cells">
                    <input type="checkbox" className="mail-checkbox" />
                  </td>
                  <td className="inbox-small-cells"><i className="fa fa-star"></i></td>
                  <td className="view-message dont-show">Facebook</td>
                  <td className="view-message view-message">Somebody requested a new password</td>
                  <td className="view-message inbox-small-cells"></td>
                  <td className="view-message text-right">June 13</td>
                </tr>
                <tr className="">
                  <td className="inbox-small-cells">
                    <input type="checkbox" className="mail-checkbox" />
                  </td>
                  <td className="inbox-small-cells"><i className="fa fa-star"></i></td>
                  <td className="view-message dont-show">Skype <span
                    className="label label-info pull-right">family</span></td>
                  <td className="view-message view-message">Password successfully changed</td>
                  <td className="view-message inbox-small-cells"></td>
                  <td className="view-message text-right">March 24</td>
                </tr>
                <tr className="">
                  <td className="inbox-small-cells">
                    <input type="checkbox" className="mail-checkbox" />
                  </td>
                  <td className="inbox-small-cells"><i className="fa fa-star inbox-started"></i></td>
                  <td className="view-message dont-show">Google+</td>
                  <td className="view-message">alireza, do you know</td>
                  <td className="view-message inbox-small-cells"></td>
                  <td className="view-message text-right">March 09</td>
                </tr>
                <tr className="">
                  <td className="inbox-small-cells">
                    <input type="checkbox" className="mail-checkbox" />
                  </td>
                  <td className="inbox-small-cells"><i className="fa fa-star inbox-started"></i></td>
                  <td className="dont-show">Zoosk</td>
                  <td className="view-message">7 new singles we think you'll like</td>
                  <td className="view-message inbox-small-cells"><i className="fa fa-paperclip"></i></td>
                  <td className="view-message text-right">May 14</td>
                </tr>
                <tr className="">
                  <td className="inbox-small-cells">
                    <input type="checkbox" className="mail-checkbox" />
                  </td>
                  <td className="inbox-small-cells"><i className="fa fa-star"></i></td>
                  <td className="view-message dont-show">LinkedIn</td>
                  <td className="view-message">Alireza: Nokia Networks, System Group and</td>
                  <td className="view-message inbox-small-cells"><i className="fa fa-paperclip"></i></td>
                  <td className="view-message text-right">February 25</td>
                </tr>
                <tr className="">
                  <td className="inbox-small-cells">
                    <input type="checkbox" className="mail-checkbox" />
                  </td>
                  <td className="inbox-small-cells"><i className="fa fa-star"></i></td>
                  <td className="dont-show">Facebook</td>
                  <td className="view-message view-message">Your account was recently logged into</td>
                  <td className="view-message inbox-small-cells"></td>
                  <td className="view-message text-right">March 14</td>
                </tr>
                <tr className="">
                  <td className="inbox-small-cells">
                    <input type="checkbox" className="mail-checkbox" />
                  </td>
                  <td className="inbox-small-cells"><i className="fa fa-star"></i></td>
                  <td className="view-message dont-show">Twitter</td>
                  <td className="view-message">Your Twitter password has been changed</td>
                  <td className="view-message inbox-small-cells"></td>
                  <td className="view-message text-right">April 07</td>
                </tr>
                <tr className="">
                  <td className="inbox-small-cells">
                    <input type="checkbox" className="mail-checkbox" />
                  </td>
                  <td className="inbox-small-cells"><i className="fa fa-star"></i></td>
                  <td className="view-message dont-show">InternetSeer Website Monitoring</td>
                  <td className="view-message">http://golddesigner.org/ Performance Report</td>
                  <td className="view-message inbox-small-cells"></td>
                  <td className="view-message text-right">July 14</td>
                </tr>
                <tr className="">
                  <td className="inbox-small-cells">
                    <input type="checkbox" className="mail-checkbox" />
                  </td>
                  <td className="inbox-small-cells"><i className="fa fa-star inbox-started"></i></td>
                  <td className="view-message dont-show">AddMe.com</td>
                  <td className="view-message">Submit Your Website to the AddMe Business Directory</td>
                  <td className="view-message inbox-small-cells"></td>
                  <td className="view-message text-right">August 10</td>
                </tr>
                <tr className="">
                  <td className="inbox-small-cells">
                    <input type="checkbox" className="mail-checkbox" />
                  </td>
                  <td className="inbox-small-cells"><i className="fa fa-star"></i></td>
                  <td className="view-message dont-show">Terri Rexer, S P N</td>
                  <td className="view-message view-message">Forget Google AdWords: Un-Limited Clicks fo</td>
                  <td className="view-message inbox-small-cells"><i className="fa fa-paperclip"></i></td>
                  <td className="view-message text-right">April 14</td>
                </tr>
                <tr className="">
                  <td className="inbox-small-cells">
                    <input type="checkbox" className="mail-checkbox" />
                  </td>
                  <td className="inbox-small-cells"><i className="fa fa-star"></i></td>
                  <td className="view-message dont-show">Bertina</td>
                  <td className="view-message">IMPORTANT: Don't lose your domains!</td>
                  <td className="view-message inbox-small-cells"><i className="fa fa-paperclip"></i></td>
                  <td className="view-message text-right">June 16</td>
                </tr>
                <tr className="">
                  <td className="inbox-small-cells">
                    <input type="checkbox" className="mail-checkbox" />
                  </td>
                  <td className="inbox-small-cells"><i className="fa fa-star inbox-started"></i></td>
                  <td className="view-message dont-show">Laura Gaffin, S P N</td>
                  <td className="view-message">Your Website On Google (Higher Rankings Are Better)</td>
                  <td className="view-message inbox-small-cells"></td>
                  <td className="view-message text-right">August 10</td>
                </tr>
                <tr className="">
                  <td className="inbox-small-cells">
                    <input type="checkbox" className="mail-checkbox" />
                  </td>
                  <td className="inbox-small-cells"><i className="fa fa-star"></i></td>
                  <td className="view-message dont-show">Facebook</td>
                  <td className="view-message view-message">Alireza Zare Login faild</td>
                  <td className="view-message inbox-small-cells"><i className="fa fa-paperclip"></i></td>
                  <td className="view-message text-right">feb 14</td>
                </tr>
                </tbody>
              </table>
            </div>
          </aside>
        </div>
      </div>
      )
    }
  }